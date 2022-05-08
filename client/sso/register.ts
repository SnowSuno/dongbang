import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";

Meteor.loginAsAdmin = function (password, callback) {
    // Create a login request with admin: true, so our loginHandler can handle this request
    const loginRequest = {admin: true, password: password};
    
    // Send the login request 📤
    Accounts.callLoginMethod({
        methodArguments: [loginRequest],
        userCallback: callback
    });
};
