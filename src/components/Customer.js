import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Customer = ({id}) =>
{
    const { data, error } = useSWR(`${process.env.REACT_APP_API_BASE_URL}/Customer/GetCustomer/${id}`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
      /*<div className="rounded-md p-2 m-3 border border-gray-700 shadow-lg w-fit text-gray-300">
        <table className="table-auto">
          <thead>
            <tr class="text-decoration-line: underline ">
              <th class="p-2">First Name</th>
              <th class="p-2">Last Name</th>
              <th class="p-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
                <td class="pl-2">{data.firstName}</td>
                <td class="pl-2">{data.lastName}</td>
                <td class="pl-2">{data.birthDate}</td>
            </tr>
          </tbody>
        </table>
      </div>*/
         <div class=" m-3 shadow-md sm:rounded-lg">
     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                     <th scope="col" class="px-6 py-3">
                         First Name
                     </th>
                     <th scope="col" class="px-6 py-3">
                         Last Name
                     </th>
                     <th scope="col" class="px-6 py-3">
                         Date Of Birth
                     </th>
                     <th scope="col" class="px-6 py-3">
                         <span class="sr-only">Detail</span>
                     </th>
                 </tr>
             </thead>
             <tbody>
             <tr key={id} class='class="bg-white border-b bg-gray-800 border-gray-700'>
                <td class="px-6 py-3">{data.firstName}</td>
                <td class="px-6 py-3">{data.lastName}</td>
                <td class="px-6 py-3">{data.birthDate}</td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
             </tbody>
         </table>
     </div>
    )
}

export default Customer;