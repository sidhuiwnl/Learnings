
import {client} from "db/client";

export const dynamic = "force-dynamic";

export default async function Home() {
    const users = await client.user.findMany({});
  return (
   <div>
       {users.map((user) => (
           <div key={user.id}>
               {user.username}
           </div>
       ))}
   </div>
  );
}
