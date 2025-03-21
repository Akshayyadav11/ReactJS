export function Footer({mainHeading}){
    return (
      <footer className="bg-dark text-light py-3 text-center w-100 position-fixed bottom-0 start-0">
      <p className="mb-0">&copy; {new Date().getFullYear()} Patient Management. All Rights Reserved.</p>
      <p>{mainHeading}</p>
  </footer>

          
            
          
    )
}