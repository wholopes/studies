var facebookProfile = {
    name: "Rute",
    friends: 2,
    messages: ["Whatever, dude...", "Whaaaa???", "Yep..."],
    
    postMessage: function (messages) {
        facebookProfile.messages.push("That is enough.");
        return facebookProfile.messages;
    },
    
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    
    addFriend: function () {
        facebookProfile.friends ++;
        return facebookProfile.friends;
    },

    removeFriend: function () {
        facebookProfile.friends --;
        return facebookProfile.friends;

    }
};
console.log(facebookProfile.deleteMessage());