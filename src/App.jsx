
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { supabase } from "./supabase";

import Login from "./pages/Login";
import SetPassword from "./pages/SetPassword";
import VeloELearning from "./pages/VeloELearning";
import Administration from "./pages/Administration";
import TechnicalTraining from "./pages/TechnicalTraining";
import TechnicalForTalent from "./pages/TechnicalForTalent";

function App() {
  const [session, setSession] = useState(null);

  const [requiresPasswordSetup, setRequiresPasswordSetup] = useState(() => {
    const hash = new URLSearchParams(
      window.location.hash.substring(1)
    );

    const isInvitation = hash.get("type") === "invite";
    const isPasswordPage = window.location.pathname.endsWith(
      "/set-password"
    );

    if (isInvitation || isPasswordPage) {
      sessionStorage.setItem("velo_password_setup", "true");
      return true;
    }

    return sessionStorage.getItem("velo_password_setup") === "true";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);

      if (event === "PASSWORD_RECOVERY") {
        sessionStorage.setItem("velo_password_setup", "true");
        setRequiresPasswordSetup(true);
      }

      if (event === "SIGNED_OUT") {
        sessionStorage.removeItem("velo_password_setup");
        setRequiresPasswordSetup(false);
      }
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Session error:", error.message);
      }

      setSession(data?.session ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          session ? (
            <Navigate
              to={requiresPasswordSetup ? "/set-password" : "/"}
              replace
            />
          ) : (
            <Login />
          )
        }
      />

      <Route
  path="/set-password"
  element={
    session ? (
      <SetPassword
        onComplete={() => setRequiresPasswordSetup(false)}
      />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>

      <Route
        path="/"
        element={
          session ? (
            requiresPasswordSetup ? (
              <Navigate to="/set-password" replace />
            ) : (
              <VeloELearning />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/administration"
        element={
          session && !requiresPasswordSetup ? (
            <Administration />
          ) : (
            <Navigate
              to={session ? "/set-password" : "/login"}
              replace
            />
          )
        }
      />

      <Route
        path="/technical-training"
        element={
          session && !requiresPasswordSetup ? (
            <TechnicalTraining />
          ) : (
            <Navigate
              to={session ? "/set-password" : "/login"}
              replace
            />
          )
        }
      />

      <Route
        path="/technicalfortalent"
        element={
          session && !requiresPasswordSetup ? (
            <TechnicalForTalent />
          ) : (
            <Navigate
              to={session ? "/set-password" : "/login"}
              replace
            />
          )
        }
      />

      <Route
        path="*"
        element={
          <Navigate
            to={
              !session
                ? "/login"
                : requiresPasswordSetup
                  ? "/set-password"
                  : "/"
            }
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
