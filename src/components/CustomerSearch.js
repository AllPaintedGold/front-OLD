

const CustomerSearch = () => {
  
 return (
  <div className=" bg-gray-800 rounded-md p-3 m-3 border border-gray-700 shadow-lg w-fit text-gray-300">
   <form class="w-full max-w-sm" 
   action={`/CustomerList/?firstName=${document.getElementById('firstName')}&lastName=${document.getElementById('lastName')}`}>
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname">
         Vorname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="inline-full-name" type="text" name="firstName"/>
     </div>
   </div>
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lname">
        Nachname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="inline-full-name" type="text" name="lastName"/>
     </div>
   </div>
   
   <div className="md:flex md:items-center">
     <div className="md:w-1/3"></div>
     <div className="md:w-2/3">
       <input className="bg-zinc-700 hover:bg-zinc-500
       shadow focus:shadow-outline 
       focus:outline-none text-gray-300 hover:cursor-pointer font-bold py-2 px-4 rounded" 
       type="submit" value="Suchen" />
     </div>
   </div>
 </form>
 </div>
 )
}

export default CustomerSearch;

/*
<div className=" bg-gray-800 rounded-md p-3 m-3 border border-gray-700 shadow-lg w-fit text-gray-300">
   <form class="w-full max-w-sm" action={`${process.env.REACT_APP_API_BASE_URL}/Customer/SearchCustomer/`} method="get">
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname">
         Vorname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="inline-full-name" type="text" name="firstName"/>
     </div>
   </div>
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lname">
        Nachname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="inline-full-name" type="text" name="lastName"/>
     </div>
   </div>
   
   <div className="md:flex md:items-center">
     <div className="md:w-1/3"></div>
     <div className="md:w-2/3">
       <input className="bg-zinc-700 hover:bg-zinc-500
       shadow focus:shadow-outline 
       focus:outline-none text-gray-300 hover:cursor-pointer font-bold py-2 px-4 rounded" 
       type="submit" value="Suchen" onClick={<a></a>}/>
     </div>
   </div>
 </form>
 </div>
*/

/*
<div className=" bg-gray-800 rounded-md p-3 m-3 border border-gray-700 shadow-lg w-fit text-gray-300">
   <form class="w-full max-w-sm">
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname">
         Vorname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="firstName" type="text" name="firstName"/>
     </div>
   </div>
   <div class="md:flex md:items-center mb-6">
     <div class="md:w-1/3">
       <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lname">
        Nachname
       </label>
     </div>
     <div class="md:w-2/3">
       <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
       id="lastName" type="text" name="lastName"/>
     </div>
   </div>
   
   <div className="md:flex md:items-center">
     <div className="md:w-1/3"></div>
     <div className="md:w-2/3">
       <a href={`/CustomerList/?firstName=${document.getElementById('firstName')}&lastName=${document.getElementById('lastName')}`}>
        <button className="bg-zinc-700 hover:bg-zinc-500
       shadow focus:shadow-outline 
       focus:outline-none text-gray-300 hover:cursor-pointer font-bold py-2 px-4 rounded" 
       >Suchen</button></a>
     </div>
   </div>
 </form>
 </div>
*/