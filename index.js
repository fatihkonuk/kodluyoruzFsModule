const fs = require('fs');


const readFile = (fileName) => {
    return new Promise((resolve,reject) => {
        fs.readFile(fileName, 'utf8', (err,data) => {
            if(err) reject(err);
            else {
                console.log("Dosya Okundu");
                resolve(data);
            } 
        });
    })
}
const writeFile = (fileName,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName, `{\n${data}\n}`, (err) => {
            if (err) reject(err);
            else resolve('Dosya Oluşturuldu');
        });
    })
}
const updateFile = async (fileName,data) => {
    let oldData = await readFile(fileName);
    oldData = oldData.slice(2,-1);
    const newData = `${oldData},\n${data}`;
    await writeFile(fileName,newData);
    console.log('Dosya Güncellendi');
}
const deleteFile = (fileName) => {
    return new Promise((resolve,reject) => {
        fs.rm(fileName,(err) => {
            if(err) reject(err);
            else resolve('Dosya Silindi');
        })
    })
    
}
//Dosya Oluşturma
writeFile('employees.json', '"employee1": {"name":"Employee 1 Name", "salary":2000}');

//Dosya Okuma
// readFile('employees.json');

//Dosya Güncelleme
// updateFile('employees.json', '"employee2": {"name":"Employee 2 Name", "salary":3000}');

//Dosya Silme
// deleteFile('employes.json');
