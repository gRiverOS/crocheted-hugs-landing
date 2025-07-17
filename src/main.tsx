import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Clarity from '@microsoft/clarity';
import React from "react";
import UnderConstruction from "./pages/UnderConstruction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Clarity.init('sf95yqhgbp');

createRoot(document.getElementById("root")!).render(<App />);
