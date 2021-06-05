const aksJs = (function () {
    function getElementById(id) {
        return document.getElementById(id)
    }
    function getInputValueFromId (id) {
        return getElementById(id).value;
    }
    function setInputValue(id, value) {
        return getElementById(id).value = value;
    }
    function renderContent(id, {firstName, lastName, age, stream, college}) {
        getElementById(id).innerHTML += `<div data-firstName="${firstName}"
                data-lastName="${lastName}" data-age="${age}" data-stream="${stream}" data-college="${college}"
                class="item">Candidate name is ${firstName} ${lastName} whose age is ${age}. 
            He is in ${stream} steam of ${college} college.</div>`
    }
    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    }
    return {
        getInputValueFromId: getInputValueFromId,
        getElementById: getElementById,
        renderContent: renderContent,
        hasClass: hasClass,
        setInputValue: setInputValue
    }
})()

// logic
const list = aksJs.getElementById('list');
const studentForm = aksJs.getElementById('student-form');
studentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = aksJs.getInputValueFromId('first-name');
    const lastName = aksJs.getInputValueFromId('last-name');
    const age = aksJs.getInputValueFromId('age');
    const stream = aksJs.getInputValueFromId('stream');
    const college = aksJs.getInputValueFromId('college');
    aksJs.renderContent('list', {
        firstName, lastName, age, stream, college
    })
    this.reset();
})
list.addEventListener('click', function (e) {
    const item = e.target;
    if (!aksJs.hasClass(item, 'item')) {
        console.log('item me click nahi hua hai')
        return false;
    }
    console.log(item.dataset)
    populateForm(item.dataset);
})
function populateForm(formData) {
    aksJs.setInputValue('first-name', formData.firstname)
    aksJs.setInputValue('last-name', formData.lastname)
    aksJs.setInputValue('age', formData.age)
    aksJs.setInputValue('stream', formData.stream)
    aksJs.setInputValue('college', formData.college)
}
