var siteName = document.getElementById('bookmarkName');
var siteUrl = document.getElementById('bookmarkURL');

var sites = [];
if (localStorage.getItem('wzty')) {
    sites = JSON.parse(localStorage.getItem('wzty'));
    displayData();
}

function addProduct() {
    if (validationName() && validationURL()) {

        var site = {
            name: siteName.value,
            url: siteUrl.value,
        }
        console.log(site);
        sites.push(site);
        localStorage.setItem('wzty', JSON.stringify(sites));
        console.log(sites);
        displayData();
        clearInputs();
    }
}

function clearInputs() {
    siteName.value = ''
    siteUrl.value = ''

}
function displayData() {
    var table = '';
    for (var i = 0; i < sites.length; i++) {
        table += `  <tr>
                    <td> ${i + 1} </td>
                    <td> ${sites[i].name} </td>
                    <td> <a class="btn btn-success " href="${sites[i].url}"><i class="fa-solid fa-eye"></i> Visit </a></td>
                    <td> <button onclick = "deleteItem(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Delete</button> </td>
                </tr>`


    }
    console.log(table);
    document.getElementById(`rowelemnts`).innerHTML = table

}

function deleteItem(index) {
    sites.splice(index, 1)
    localStorage.setItem('wzty', JSON.stringify(sites));
    displayData();
}


function validationName() {
    var regex = /^\w{2,}$/
    var text = bookmarkName.value

    var msName = document.getElementById('msName')
    if (regex.test(text)) {
        bookmarkName.classList.add('is-valid')
        bookmarkName.classList.remove('is-invalid')
        msName.classList.add('d-none')
        return true;

    }
    else {
        bookmarkName.classList.remove('is-valid')
        bookmarkName.classList.add('is-invalid')
        msName.classList.remove('d-none')
        return false;

    }
}

function validationURL() {
    var regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    var term = bookmarkURL.value;
    var msURL = document.getElementById('msURL')
    if (regex.test(term)) {
        bookmarkURL.classList.add('is-valid')
        bookmarkURL.classList.remove('is-invalid')
        msURL.classList.add('d-none')
        return true;

    }
    else {
        bookmarkURL.classList.remove('is-valid')
        bookmarkURL.classList.add('is-invalid')
        msURL.classList.remove('d-none')
        return false;
    }
}
