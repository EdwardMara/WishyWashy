import React from 'react';

export default () => {
    return (
        <footer className = "bg-light text-dark mt-5 p-4 text-center">
            <p>
            Copyright &copy; { new Date().getFullYear() } Wishy Washy
            </p>
            <a href='WishyWashy/termsAndConditions'>Terms &amp; Conditions</a>
        </footer>
    );
};