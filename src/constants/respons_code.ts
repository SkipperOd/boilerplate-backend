let responseCodes: { [index: string]: string } = {

    // Generic - Series 1XX
    101: 'Insufficient rights',
    102: 'Invalid Parameters',
    103: 'Listing successful',
    104: 'No records found',
    105: 'Action failed',
    106: 'Requested resource does not exists',
    107: 'You are exceeding the limit for this action',

    // Auth - Series 2XX
    200: 'Authentication successful',
    201: 'Invalid credentials',
    202: 'Requested resource has a status as in-active or banned',
    203: 'Requested resource is pending verification',
    204: 'Requested resource has a status as deleted',
    205: 'Requested resource does not exists',
    206: 'Invalid password',
    207: 'No login found',



    // Sign Up - Series 3XX
    300: 'Validation successful',
    301: 'Validation failed',
    302: 'Sign Up successful',
    303: 'Sign Up failed',
    304: 'Email exists already',
    305: 'Username exists already',

    // Network - Series 2XXX
    2000: 'This user is blocked by you.',
    2001: 'This user has blocked you.',
};
// Generic - Series 1XX



export function GetStatusText(code: string) {
    if (responseCodes.hasOwnProperty(code)) {
        return responseCodes[code];
    } else {
        throw new Error('Status code does not exist: ' + code);
    }
};
