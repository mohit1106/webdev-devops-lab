const client = require("./client");
async function init(){
    await client.set('user:3', 'nodejs 3rd user');
    const res = await client.get("user:3");
    console.log(res);
}
init();