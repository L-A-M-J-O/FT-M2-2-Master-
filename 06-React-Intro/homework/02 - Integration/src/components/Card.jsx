export default function Card(props) {
   return (
      <div>
         {/* <button onClick={}>X</button> */}
         <h2>{this.props.name}</h2>
         <h2>{this.props.species}</h2>
         <h2>{this.props.gender}</h2>
         <img  src={this.props.image} alt="" />
      </div>
   );
}
