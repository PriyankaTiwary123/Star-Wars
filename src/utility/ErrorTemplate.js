/**
 * Error component which accepts props and export template with props value .
 * 
 * @component
 * @example
 * return (
 *   <div>error message</div>
 * )
 */
import React from 'react';
export const ErrorTemplate = (props) => {
   return (
      <div className="error-message">{props.value}</div>

   )

}