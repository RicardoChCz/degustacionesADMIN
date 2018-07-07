/*User*/
const Condensado = [
  {
    name: 'Ana',
    img: 'images/avatar/1.jpg',
    tasks: [{status: "done", description:"Entregar oficio a IFM", date:"02-jun-2018"},
            {status: "done", description:"Entregar oficio a CCM", date:"02-jun-2018"},
            {status: "done", description:"Entregar oficio a FISMAT", date:"02-jun-2018"},
            {status: "done", description:"Entregar oficio a Daniel Juan", date:"02-jun-2018"}]
  },
  {
    name: 'Bety',
    img: 'images/avatar/2.jpg',
    tasks: [{status: "done", description:"Elaborar presupuesto de comida", date:"02-jun-2018"},
            {status: "done", description:"Elaborar oficio de apoyo económico", date:"02-jun-2018"}]
  },
  {
    name: 'Carla',
    img: 'images/avatar/3.jpg',
    tasks: [{status: "done", description:"Entregar oficio a Morelia", date:"02-jun-2018"},
            {status: "done", description:"Entregar oficio a Katy", date:"02-jun-2018"}]
  },
  {
    name: 'Diana',
    img: 'images/avatar/4.jpg',
    tasks: [{status: "done", description:"Invitar ponentes", date:"03-junio-2018"}]
  },
  {
    name: 'Elodia',
    img:'images/avatar/6.jpg',
    tasks: [{status: "done", description:"Conseguir café", date:"03-junio-2018"},
            {status: "done", description:"Conseguir galletas", date:"03-junio-2018"},
            {status: "done", description:"Conseguir alumnos", date:"03-junio-2018"},
            {status: "done", description:"Hacer carteles de tiempo", date:"03-junio-2018"}]
  },
];

const Avatar = props => <img src={props.user.img} alt={props.user.name} />;
const UserName = props => <p> {props.user.name} </p>;

const SingleTask = props => {
  return(
    <tr ClassName="clickable-row">
        <td valgin="top">
          status
        </td>
        <td>
          description
        </td>
        <td>
          date
        </td>
    </tr>
  )
};


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
  ,document.getElementById('root')
);
