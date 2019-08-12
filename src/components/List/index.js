import React from "react";
// import "./resetCss.css";
import "./style.css";


// This file exports both the List and ListItem components
export function List({ children }) {
    return <section className="mw7 center avenir">
        {children}
        </section>
}

export function ListItem(props) {
    return (
        <article className="bt bb b--black-10 shadow-1 list-item">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                <div className="flex flex-wrap-ns flex-column-ns">
                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                        <img src={props.img} height="200" width="300" className="db pic" alt="Photo of store/restaurant" />
                    </div>
                    <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title info">{props.position}</h1>
                        <p className="f6 f5-l lh-copy">
                            {props.address}
                            <br />
                            {props.pay} for {props.hours} hours
          </p>
                        <p className="f6 lh-copy mv0">Restaurant name here</p>
                    </div>
                </div>
            </a>
        </article>
    )
}