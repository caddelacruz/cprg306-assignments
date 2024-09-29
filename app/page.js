import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>  
        <ul>  
          <p>
            <Link href="/week-2">Week 2 Assignment</Link> 
            <p><Link href="/week-3">Week 3 Assignment</Link></p>
          </p>
        </ul>
      </header>
    </main>
  );
}