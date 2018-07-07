/*User*/
const Usuarios = [
  {
    name: 'Ana',
    img: 'images/avatar/1.jpg'
  },
  {
    name: 'Bety',
    img: 'images/avatar/2.jpg'
  },
  {
    name: 'Carla',
    img: 'images/avatar/3.jpg'
  },
  {
    name: 'Diana',
    img: 'images/avatar/4.jpg'
  },
  {
    name: 'Elodia',
    img:'images/avatar/6.jpg'
  },
];

const Avatar = props => <img src={props.user.img} alt={props.user.name} />;
const UserName = props => <p> {props.user.name} </p>;

const User = props => {
  return(
    <div className="user-item">
      <Avatar user={props.user}/>
      <UserName user={props.user}/>
    </div>
  )
};

const UsersList = props => {
  const userList = props.list.map((user,i) => <User user={user} key={i} />);
  return(
    <div ClassName="user-list">
      {userList}
    </div>
  )
};

ReactDOM.render(
  <UsersList list={Usuarios} />
  ,document.getElementById('root')
);
