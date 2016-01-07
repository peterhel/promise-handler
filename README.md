A simple promise handler to use when you find yourself turning the same `function (err, result) {}` to promises again and again and again.

_Instead of:_​

    return new Promise((resolve, reject) => {
        theLib.update(accountId, data, function(err, customer) {
            if (err) {
                return reject(err);
            }

            return resolve(customer);
        });
    });

​_Do:_

    return swear(handler => {
        theLib.accounts.update(accountId, data, handler);
    });
