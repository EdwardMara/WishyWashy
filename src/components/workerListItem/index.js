import React from "react";
// import "./resetCss.css";
import "./style.css";


// This file exports both the List and ListItem components
export function WorkerUList({ children }) {
    return <section className="mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">Jobs</h2>
        {children}
    </section>
}

export function WorkerListItem(props) {
    return (
        <article className="bt bb b--black-10 shadow-1">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                <div className="flex flex-wrap-ns flex-column-ns">
                    <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title info">{props.name}</h1>
                        <p className="f6 f5-l lh-copy">
                            {props.address}
                            <br />
                            {props.email}
                            <br />
                            {props.phone}
                        </p>
                        <p className="f6 lh-copy mv0">Restaurant name here</p>
                    </div>
                </div>
            </a>
        </article>
    )
}
                                    // export function List() {
                                    //     return (
                                    //         <section className="mw7 center avenir">
                                    //             <h2 className="baskerville fw1 ph3 ph0-l">Jobs</h2>
                                    //             <article className="bt bb b--black-10 shadow-1">
                                    //                 <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    //                     <div className="flex flex-column flex-row-ns">
                                    //                         <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                    //                             <img src={jobs[0].img} height="200" width="300" className="db pic" alt="Photo of a dimly lit room with a computer interface terminal." />
                                    //                         </div>
                                    //                         <div className="w-100 w-60-ns pl3-ns">
                                    //                             <h1 className="f3 fw1 baskerville mt0 lh-title">{jobs[0].position}</h1>
                                    //                             <p className="f6 f5-l lh-copy">
                                    //                                 {jobs[0].address}
                                    //                                 <br />
                                    //                                 {jobs[0].pay} for {jobs[0].hours} hours
                                    //           </p>
                                    //                             <p className="f6 lh-copy mv0">Restaurant name here</p>
                                    //                         </div>
                                    //                     </div>
                                    //                 </a>
                                    //             </article>
                                    //             <article className="bt bb b--black-10 shadow-1">
                                    //                 <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    //                     <div className="flex flex-column flex-row-ns">
                                    //                         <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                    //                             <img src={jobs[1].img} height="200" width="300" className="db" alt="Photo of a dimly lit room with a computer interface terminal." />
                                    //                         </div>
                                    //                         <div className="w-100 w-60-ns pl3-ns">
                                    //                             <h1 className="f3 fw1 baskerville mt0 lh-title">{jobs[1].position}</h1>
                                    //                             <p className="f6 f5-l lh-copy">
                                    //                                 {jobs[1].address}
                                    //                                 <br />
                                    //                                 {jobs[1].pay} for {jobs[1].hours} hours
                                    //           </p>
                                    //                             <p className="f6 lh-copy mv0">Restaurant name here</p>
                                    //                         </div>
                                    //                     </div>
                                    //                 </a>
                                    //             </article>
                                    //             <article className="bt bb b--black-10 shadow-1">
                                    //                 <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    //                     <div className="flex flex-column flex-row-ns">
                                    //                         <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                    //                             <img src={jobs[2].img} height="200" width="300" className="db" alt="Photo of a dimly lit room with a computer interface terminal." />
                                    //                         </div>
                                    //                         <div className="w-100 w-60-ns pl3-ns">
                                    //                             <h1 className="f3 fw1 baskerville mt0 lh-title">{jobs[2].position}</h1>
                                    //                             <p className="f6 f5-l lh-copy">
                                    //                                 {jobs[2].address}
                                    //                                 <br />
                                    //                                 {jobs[2].pay} for {jobs[2].hours} hours
                                    //           </p>
                                    //                             <p className="f6 lh-copy mv0">Restaurant name here</p>
                                    //                         </div>
                                    //                     </div>
                                    //                 </a>
                                    //             </article>

                                    //         </section>
                                    //     )
                                    // }
