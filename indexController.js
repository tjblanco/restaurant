
(function() {
    'use strict';

    if (!navigator.serviceWorker) {
        console.log('Service worker not supported');
        return;
    }
    navigator.serviceWorker.register('sw.js')
        .then(function() {
            console.log('Registered');
        })
        .catch(function(error) {
            console.log('Registration failed:', error);
        });

})();
