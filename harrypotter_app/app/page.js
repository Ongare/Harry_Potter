
// export const getStaticProps = async () => { 
//   const res = await fetch('https://hp-api.onrender.com/');
//   const data = await res.json();

//   return {
//     props: {jina:data}
//   }
// }


// export default function Home({jina}) {
//   return (
//     <main className='container mx-auto py-36 px-8'>
//       <div className="grid lg:grid-cols-3 gap-40">
//     <h1>HarryPotter</h1>
//       {jina.map((character) => (
//         <div  key = {character.id}>
//        <h3>{character.name}</h3>
//         </div>
//       ))}
//       </div>
//     </main>
//   )
// }

  


  
    async function getData() {
      const query = await fetch('https://hp-api.onrender.com/api/characters');
      const response = await query.json();
     return response
     }
  
     export default async function Home() {
      const data = await getData()
      return (
       
        <div className="container mx-auto py-5 px-4">  
           <h1 className="font-bold text-slate-700 mb-1 text-2xl underline-offset-8">Characters</h1>
          <div className= "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">       
         {data.map(data => {

         return(
          <div className="shadow-lg p-5 hover:bg-slate-400">
          <p className="font-bold text-slate-500 mb-3" key={data.id}>
          {data.name}
          </p>
          <p key={data.id}>
          {data.dateOfBirth}
          </p>
          </div>
          )
         })}
        </div>
        </div>
      )
     } 