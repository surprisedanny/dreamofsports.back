export const cfg = {   
    mainsiteUrl: "https://dream-of-sports.com",
    staticUrl: "https://static.mechta.vio.net.ua",    
    backUrl: "https://back.mechta.vio.net.ua", 
    ownerUrl: "https://owner.mechta.vio.net.ua",
    editorUrl: "https://editor.mechta.vio.net.ua",
    corsedUrls: [
        "https://dream-of-sports.com",
        "https://owner.dream-of-sports.com", 
        "https://editor.mechta.vio.net.ua", 
        "http://localhost:8100",
        "http://localhost:4200",
        "https://localhost",
        "capacitor://localhost",
    ],  
    dbHost: "localhost",
    dbPort: 3306,
    dbName: "mechta",
    dbLogin: "root",
    dbPassword: "Password2@",
    appPort: 3020,    
    wsPort: 3021,
    jwtAdmin: {
        secret: "koshechki",
        signOptions: {expiresIn: 60*60*24*365}, 
    },
    jwtUser: {
        secret: "sobachki",
        signOptions: {expiresIn: 60*60*24*365}, 
    },
    encryption: {
        key: '6562437b50e2336726de7e6df6b75a4fac21d66ab7694ef6c0fb245f39afdf6a',        
        iv: '657f98160670dc6a11207c1c9b3c8c55',
    },
};
