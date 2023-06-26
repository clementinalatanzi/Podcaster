import { FaSpinner } from 'react-icons/fa';
//import './LoadingIndicator.css'

export function LoadingIndicator(){
  return (
    <div className="loading-indicator">
      <FaSpinner className="spinner-icon" />
    </div>
  )
}
