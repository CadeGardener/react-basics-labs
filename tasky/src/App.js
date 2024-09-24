import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher and put in dirty dishes"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" description="Tidy bedroom and sitting room"/>
      <Task title="Wash Floor" deadline="Tomorrow" description="Wash kitchen and hallway floors" />
    </div>
  );
}

export default App;