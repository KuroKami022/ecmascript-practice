const button = document.getElementById('btn');

button.addEventListener("Click", async function () {
    const module = await import('./module-DI');
    console.log(module);
    module.hello();
});
