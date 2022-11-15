import Botones from "./Botones";

const studentName = "";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

function Bienvenido(studentName) {
  // el código de tu componente acá
  return (
    <div>
      <h1>Bienvenido Usuario</h1>
      <h4>{studentName ='Alan Naranjo'}</h4>
      <ul>
      {
        techSkills.map((element, index) => (
          <li> key={index} {element}</li>
        ))
      }
      </ul>
      <Botones alerts={alerts}/>
    </div>
  )

}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
export default Bienvenido;
