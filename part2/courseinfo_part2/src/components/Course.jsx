

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key = {part.id} part = {part} />  )}

  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({part}) => {
  return (
 <p> <strong>total of {part.reduce((total, number) => total + number.exercises,0  )} exercises</strong> </p>

  )
}

const Course = ({course}) =>  {
  return(
    <div>
      <Header course={course.name} />
       <Content parts={course.parts} />
       <Total part={course.parts} />
      
    </div>
   
  )
}
export default Course