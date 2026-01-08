const client = require("./client");
async function init(){
    // strings
    await client.set('user:3', 'nodejs 3rd user');
    const res = await client.get("user:3");
    await client.expire('user:3', 10); // ttl expires after 10 sec
    console.log(res);
    
    // lists
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    console.log(await client.rpop("messages"));
    console.log(await client.brpop("messages", 20));

    
}
init();  