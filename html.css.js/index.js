const inputBox = document.getElementsByTagName("input");
const uL = document.getElementsByClassName("todo-list");
const garbage = document.getElementsByTagName("img");


inputBox[0].addEventListener("enter", (e)=> {
    const newLi = document.createElement("li");
    // const deLete = document.createElement("img");
    // deLete.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAZlBMVEX///8AAADJyclmZmb19fX6+vqnp6fx8fHt7e3Y2NgjIyOqqqrc3Nzo6OiXl5fl5eUoKChTU1PS0tJJSUkSEhJtbW1dXV02NjZBQUG7u7ufn5+RkZGFhYUMDAwdHR07Ozt1dXUvLy+/ePMVAAADnElEQVR4nO2a6XLqMAyFU0hIgdAQytaF7f1fsk0vtOc4dmK3eLkz+n4SeyJ8IlmWlWWCIAiCIAiCIAiCIAiCIAiCIPzn1JvxN9u5/bzRz7RxU/mzL5s8ANYvqpcw692jeVn2DG9qcstJG5h0WXi1rzrCu57s5rzgoo+8mqcovLKZUe+CqdvSwNv2NhPOOKH2bV62wAV8Gx4fVN2WV3jfejo0mtQ9+7cuywp0x6XL4OcyhH1ZjYoN+DCp+xLEPPbhY+8ntZgF9d0rxRhF64nSNHBXhLIvqywVnsdQt/Nio8KPOMoiFN2PYgtvNu3DBUbmdTh1W6bL4aWxW2RP0D6sjdL1IYbvfoP78FYXePETWNqmYvejvvQvj3uic2dwH+7m0nWUyExQpqUKuEcHD7PvqlS4RIoPk+/GULfF/IlNw52I+jBuryh9JHVbTJlW1MiM6JP3FR7y4qn7SY4Kn64/0uYcKGc2oUtR6IASU92WSceYSmNyPDiX/vThnKoZcdVtUTcyVPcQKzIjHKVdj+/+4SMu7rtDh+NAVLiZpeS7NyZ6+5JQ94tGZ95z2BNRH9VFY18Kvntj3jXPsrgaiK1qXl/ZIwLVWrHP5y3Cb1AUTsd3rzyReRFzZj0jXr5NOrHli3zH9j04XH6F4K0TXpJy39GhY984JYVnHfOSUvhdY97D2v9VkSUjNTZffTi2XVfKvda8ZBRGdY9Yct4loTBF5nmJF9gpKPyoGDRFc0NeeRhAdZdtnRwVPkVXeNVxCFrQc1zr2Jjm32/0QUZWGPfd2e0WhBT2264xQFfdlvKUiMI5lXF/fg/ecmCAIvPC8CBepkXqvuKTMv7lTMZZ1ZYfRWk7UEDfPahuigrPoii8wqzqVX1a4ALGULi4gAGa41pshelEpAnCdLnfuT30DuXME92IRdi2NSbHfddwVIsZpVHdo6lHDBVuHkOaxzmzaVTgxsQfSuqNMB/EqaYVsODWyZlN0N1SMIXpiKH13RtUlw5VEizp+rR/7HAXz/2hnHnoq6L74SBR2ra37jp67TL6DlAlshkeH7rRBOvMa4uYQZf9Vv3Sf4Jy5l7fvUEdAN4VxqNZT2RGqJvWs8J0i2BZvMgd4tEfoTqzdXmPuni8RmnMqrb20QxbEozZzh2gnNlhv6cuHof/5Uj/iaiP6a9nOkDVDMdVQL86esq0MKs6uH5F+N88tWSNAOcwtsDZqV1uCoIgCIIgCIIgCH/lA7YzIrYOuX1+AAAAAElFTkSuQmCC")
    // newLi.textContent = inputBox[0].value;
    // newLi.textContent = `${deLete.src}`;
    // newLi.textContent = `${deLete}`;
    newLi.innerHTML = `<li>${inputBox[0].value}<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAZlBMVEX///8AAADJyclmZmb19fX6+vqnp6fx8fHt7e3Y2NgjIyOqqqrc3Nzo6OiXl5fl5eUoKChTU1PS0tJJSUkSEhJtbW1dXV02NjZBQUG7u7ufn5+RkZGFhYUMDAwdHR07Ozt1dXUvLy+/ePMVAAADnElEQVR4nO2a6XLqMAyFU0hIgdAQytaF7f1fsk0vtOc4dmK3eLkz+n4SeyJ8IlmWlWWCIAiCIAiCIAiCIAiCIAiCIPzn1JvxN9u5/bzRz7RxU/mzL5s8ANYvqpcw692jeVn2DG9qcstJG5h0WXi1rzrCu57s5rzgoo+8mqcovLKZUe+CqdvSwNv2NhPOOKH2bV62wAV8Gx4fVN2WV3jfejo0mtQ9+7cuywp0x6XL4OcyhH1ZjYoN+DCp+xLEPPbhY+8ntZgF9d0rxRhF64nSNHBXhLIvqywVnsdQt/Nio8KPOMoiFN2PYgtvNu3DBUbmdTh1W6bL4aWxW2RP0D6sjdL1IYbvfoP78FYXePETWNqmYvejvvQvj3uic2dwH+7m0nWUyExQpqUKuEcHD7PvqlS4RIoPk+/GULfF/IlNw52I+jBuryh9JHVbTJlW1MiM6JP3FR7y4qn7SY4Kn64/0uYcKGc2oUtR6IASU92WSceYSmNyPDiX/vThnKoZcdVtUTcyVPcQKzIjHKVdj+/+4SMu7rtDh+NAVLiZpeS7NyZ6+5JQ94tGZ95z2BNRH9VFY18Kvntj3jXPsrgaiK1qXl/ZIwLVWrHP5y3Cb1AUTsd3rzyReRFzZj0jXr5NOrHli3zH9j04XH6F4K0TXpJy39GhY984JYVnHfOSUvhdY97D2v9VkSUjNTZffTi2XVfKvda8ZBRGdY9Yct4loTBF5nmJF9gpKPyoGDRFc0NeeRhAdZdtnRwVPkVXeNVxCFrQc1zr2Jjm32/0QUZWGPfd2e0WhBT2264xQFfdlvKUiMI5lXF/fg/ecmCAIvPC8CBepkXqvuKTMv7lTMZZ1ZYfRWk7UEDfPahuigrPoii8wqzqVX1a4ALGULi4gAGa41pshelEpAnCdLnfuT30DuXME92IRdi2NSbHfddwVIsZpVHdo6lHDBVuHkOaxzmzaVTgxsQfSuqNMB/EqaYVsODWyZlN0N1SMIXpiKH13RtUlw5VEizp+rR/7HAXz/2hnHnoq6L74SBR2ra37jp67TL6DlAlshkeH7rRBOvMa4uYQZf9Vv3Sf4Jy5l7fvUEdAN4VxqNZT2RGqJvWs8J0i2BZvMgd4tEfoTqzdXmPuni8RmnMqrb20QxbEozZzh2gnNlhv6cuHof/5Uj/iaiP6a9nOkDVDMdVQL86esq0MKs6uH5F+N88tWSNAOcwtsDZqV1uCoIgCIIgCIIgCH/lA7YzIrYOuX1+AAAAAElFTkSuQmCC" alt=""></li>`
    uL[0].append(newLi);

    return uL[0];
});


for(let i = 0; i < garbage.length; i++){
    garbage[i].addEventListener("click", (e)=>{
        garbage[i].parentElement.remove()
        return uL[0]
    });
}


console.log();