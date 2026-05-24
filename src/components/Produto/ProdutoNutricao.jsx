import React from 'react';
import { useOutletContext } from 'react-router-dom';
const ProdutoNutricao = () => {
const produto = useOutletContext();
const nutrition = produto.nutrition;
  return (
    <>
        <table className="table table-nutrition">
        <thead>
            <tr>
                <th>Nutriente</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Proteína</td>
                <td>{nutrition.protein}g</td>
            </tr>
            <tr>
                <td>Carboidratos</td>
                <td>{nutrition.carbs}g</td>
            </tr>
            <tr>
                <td>Gordura</td>
                <td>{nutrition.fat}g</td>
            </tr>
            <tr>
                <td>Sal</td>
                <td>{nutrition.salt}g</td>
            </tr>
        </tbody>
        </table>
    </>
  );
};

export default ProdutoNutricao;