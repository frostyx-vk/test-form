
const formElem = document.getElementById('form');

let data = [];

function addAddress() {
  data.push({
    city: '',
    address: '',
    home: '',
    number: '',
  });
}

function removeAddress(idx) {
  data = data.filter((x, i) => i !== idx);
}

function createFieldSet({ id }) {
  const elem = document.createElement('fieldset');
  elem.id = id;

  return elem;
}

function createTitle(params) {
    const title = document.createElement('h3');
    title.innerHTML = params.text;
    title.className = `h3`
  
    return title;
  }

function createInput(params) {
  const input = document.createElement('input');
  input.placeholder = params.placeholder;
  input.name = params.name;
  input.value = params.value;
  input.className = `input`

  input.onchange = params.onChange;

  return input;
}

function createRemoveBtn(params) {
  const button = document.createElement('button');
  button.type = 'button'
  button.textContent = 'Remove';

  button.onclick = params.onClick;

  return button;
}

function render() {
  formElem.innerHTML = '';

  for (let index = 0; index < data.length; index++) {

    const fieldset = createFieldSet({ id: index });

    const title = createTitle({
        text: `Заголовок формы № ${index + 1}`
    })

    const city = createInput({
      placeholder: 'City',
      name: `city_${index}`,
      value: data[index]['city'],
      onChange: (e) => {
        data[index]['city'] = e.target.value
      }
    })

    const adress = createInput({
      placeholder: 'Address',
      name: `address_${index}`,
      value: data[index]['address'],
      onChange: (e) => {
        data[index]['address'] = e.target.value
      }
    })

    const home = createInput({
        placeholder: 'Home',
        name: `home_${index}`,
        value: data[index]['home'],
        onChange: (e) => {
          data[index]['home'] = e.target.value
        }
      })

    const number = createInput({
      placeholder: 'Number',
      name: `number_${index}`,
      value: data[index]['number'],
      onChange: (e) => {
        data[index]['number'] = e.target.value
      }
    })

    const removeBtn = createRemoveBtn({
      onClick: (e) => {
        removeAddress(index);
        render()
      }
    })

    fieldset.appendChild(title)
    fieldset.appendChild(city);
    fieldset.appendChild(adress);
    fieldset.appendChild(home);
    fieldset.appendChild(number);
    fieldset.appendChild(removeBtn);

    formElem.appendChild(fieldset)
  }
}

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log(Object.fromEntries(formData));
}

render();
