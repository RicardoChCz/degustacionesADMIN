/*User*/
var Usuarios = [{
  name: 'Ana',
  img: 'images/avatar/1.jpg'
}, {
  name: 'Bety',
  img: 'images/avatar/2.jpg'
}, {
  name: 'Carla',
  img: 'images/avatar/3.jpg'
}, {
  name: 'Diana',
  img: 'images/avatar/4.jpg'
}, {
  name: 'Elodia',
  img: 'images/avatar/6.jpg'
}];

var Avatar = function Avatar(props) {
  return React.createElement('img', { src: props.user.img, alt: props.user.name });
};
var UserName = function UserName(props) {
  return React.createElement(
    'p',
    null,
    ' ',
    props.user.name,
    ' '
  );
};

var User = function User(props) {
  return React.createElement(
    'div',
    { className: 'user-item' },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(UserName, { user: props.user })
  );
};

var UsersList = function UsersList(props) {
  var userList = props.list.map(function (user, i) {
    return React.createElement(User, { user: user, key: i });
  });
  return React.createElement(
    'div',
    { ClassName: 'user-list' },
    userList
  );
};

ReactDOM.render(React.createElement(UsersList, { list: Usuarios }), document.getElementById('root'));