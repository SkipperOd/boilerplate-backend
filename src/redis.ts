import Redis from "ioredis";


// we add a conenction string if we want 
// here but for now it will work fine with the default 
// connection string and it will connect to my docker image 
export const redis = new Redis();