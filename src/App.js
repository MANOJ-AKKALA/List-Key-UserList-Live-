import UserProfile from './Components/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Akkala Manoj',
    role: 'MERN StackDeveloper',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Aaradhna',
    role: 'Accountant',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Swati',
    role: 'Data Associate',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Priya Dharshini',
    role: 'Data Associate',
  },
]

/* const App = () => <UserProfile userDetails={userDetailsList} /> */

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(i => (
        <UserProfile userDetails={i} key={i.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
