const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

var keys = {};
keys.secretOrKey = "superdupersecrethaha";

// Load Data Validation
const validateRegisterManagerData = require("../validation/registerManager");
const validateLoginManagerData = require("../validation/loginManager");

// Load User model
const Manager = require("../models/Manager");

// @route   POST api/auth/manager/register
// @desc    Register manager
// @access  Public
router.post("/manager/register", (req, res) => {
    const {
        errors,
        isValid
    } = validateRegisterManagerData(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Manager
        .findOne({
            email: req.body.email
        })
        .then(manager => {
            if (manager) {
                errors.email = "Email already exists.";
                return res.status(400).json(errors);
            }

            const newManager = new Manager({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                companyName: req.body.companyName,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    console.log(err);
                }

                bcrypt.hash(newManager.password, salt, (err, hash) => {
                    if (err) {
                        throw err;
                    }

                    newManager.password = hash;

                    newManager.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        })
})

// @route   GET api/auth/manager/login
// @desc    Login Manager / Returning JWT Token
// @access  Public
router.post("/manager/login", (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginManagerData(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find workder by email
    Manager.findOne({
            email
        })
        .then(manager => {
            // Check for user
            if (!manager) {
                errors.email = "Manager not found";
                return res.status(404).json(errors);
            }

            // Check Password
            bcrypt.compare(password, manager.password)
                .then(isMatch => {
                    if (isMatch) {
                        // Manager Matched
                        const payload = {
                            id: manager.id,
                            firstName: manager.firstName,
                            lastName: manager.lastName,
                            email: manager.email,
                                    isManager: true,
                                    isWorker: false
                        }; // Create JWT Payload

                        // Sign Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey, {
                                expiresIn: 3600
                            },
                            (err, token) => {
                                if (err) {
                                    console.log(err);
                                }

                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    }
                    else {
                        errors.password = "Password incorrect";
                        return res.status(400).json(errors);
                    }
                })
        })
})

module.exports = router
