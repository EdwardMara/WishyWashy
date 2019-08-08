import React from 'react';

export default () => {
    return (
        <footer className = "bg-light text-dark mt-5 p-4 text-center">
            <p>
            Copyright &copy; { new Date().getFullYear() } Wishy Washy
            </p>
            <a href='/termsAndConditions'>Terms &amp; Conditions</a>
        </footer>
      /* Jimmy, I found this for term and conditions ( if you need it)---  https://termly.io/products/terms-and-conditions-generator/?&utm_source=google&utm_medium=cpc&utm_campaign=terms_and_conditions_us&utm_term=terms%20and%20conditions%20for%20mobile%20app&utm_campaign_id=863370649&utm_adgroup=terms_&_conditions_exact&utm_adgroup_id=46420055711&utm_content=250435688306*/
        
    );
};