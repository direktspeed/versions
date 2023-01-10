const labelFile = document.createElement('label');
labelFile.innerText = `File progress:`;
labelFile.for = 'file';
document.body.appendChild(labelFile)

const progress = document.createElement('progress');
progress.id = 'file';
progress.max = 100;
progress.value = 0;
const writeDone = ()=> document.body.appendChild(Object.assign(document.createElement('p'), { innerText: 'Done' }));
const inter = setInterval(() => {
    progress.value < 100 ? (progress.value += 1) : (clearInterval(inter), writeDone());
},25)
document.body.appendChild(progress)

document.body.appendChild(document.createElement('br'))

const labelStorage = document.createElement('label');
labelStorage.innerText = `Storage Used:`;
labelStorage.for = 'storage';
document.body.appendChild(labelStorage)
navigator.storage.estimate().then((estimate) => {
    document.body.appendChild(Object.assign(document.createElement('progress'), 
    {   id: 'storage',
        value: (estimate.usage / estimate.quota * 100).toFixed(2) }))
});

