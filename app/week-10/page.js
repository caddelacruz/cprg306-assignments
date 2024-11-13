"use client";

import { useUserAuth } from "./_utils/auth-context";  // Import the useUserAuth hook
import { useRouter } from "next/navigation";  // Import the useRouter hook for navigation

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // Get user data and auth functions
  const router = useRouter();  // Initialize the router for navigation

  // Handle redirect to shopping list page when user is logged in
  const handleRedirect = () => {
    router.push("/shopping-list"); // Redirect to shopping list page
  };

  return (
    <div style={{ textAlign: "left"}}>
      {!user ? (
        <>
          <h1 style={{ marginRight: "10px", fontWeight: "bold", fontSize: "32px", marginBottom: "20px" }}>Shopping List App</h1>
          <button onClick={gitHubSignIn} style={{ fontSize: "18px", cursor: "pointer" }}>
          Sign In with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 style={{ marginRight: "10px", fontWeight: "bold", fontSize: "32px", marginBottom: "20px" }}>Shopping List App</h1>
          <p style={{fontSize: "18px"}}>
            Signed in as {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut} style={{fontSize: "18px" }}>
            Sign out
          </button>
          <br />
          
          <button onClick={() => router.push("/week-10/shopping-list")}>
            Continue to your Shopping List
          </button>
        </>
      )}
    </div>
  );
};

export default LandingPage;

