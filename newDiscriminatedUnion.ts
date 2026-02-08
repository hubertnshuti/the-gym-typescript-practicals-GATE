// Task: Define a discriminated union Notification:
 
//  Write function sendNotification(n: Notification): void using switch(n.type). For each case, log a message including all relevant fields.
 
//  Add an assertNever(x: never): never helper, and call it in default: to enforce exhaustive handling.


 type Notification = 
   | { type: 'email'; to: string; subject: string; }
   | { type: 'sms'; to: string; phone: string; }
   | { type: 'push'; to: string; deviceId: string; };

 function sendNotification(n: Notification): void {
    switch (n.type) {
        case 'email':
            console.log(`Sending Email to ${n.to} with subject: ${n.subject}`);
            break;
        case 'sms':
            console.log(`Sending SMS to ${n.to} at phone: ${n.phone}`);
            break;
        case 'push':
            console.log(`Sending Push to ${n.to} on device: ${n.deviceId}`);
            break;
        default:
            assertNever(n);
    }
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}