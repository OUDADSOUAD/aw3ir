

var contactStore = (function () {
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_firstname, _lastname, _date, _address, _email) {
        var contact = {
          firstname: _firstname,
          lastname: _lastname,
          date: _date,
          Address: _address,
          email: _email,
        };
        // ajout du contact à la liste
        contactList.push(contact);
  
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
    };
  })();