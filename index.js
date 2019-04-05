function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const input = document.querySelector('input').value
  return input
}

function addNewElementAsLi() {
  let employeeName = retrieve
}
