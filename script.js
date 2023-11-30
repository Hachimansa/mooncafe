var groupMembers = [
    { name: 'Saad Alamrani', phone: '0537187694', email: 's@gmail.com', age:'23' ,ID:'411004128'},
    { name: 'Mohammed Alamrani', phone: '0580632860', email: 'm@gmail.com',age:'23',ID:'411003435'},
    { name: 'Yousef Alslal', phone: '0502058114', email: 'y@gmail.com', age:'23',ID:'391010482' },
     
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function displayGroupMembers() {
    shuffleArray(groupMembers);
    var listContainer = document.getElementById('group-members-list');
    listContainer.innerHTML = '';

    groupMembers.forEach(function (member) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="member-box">
                <p><strong>Name:</strong> ${member.name}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>age:</strong> ${member.age}</p>
                <p><strong>ID:</strong> ${member.ID}</p>
            </div>
        `;
        listContainer.appendChild(listItem);
    });
}

displayGroupMembers();
