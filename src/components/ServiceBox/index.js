import React from 'react';

import { Container, DayList } from './styles';

export default function ServiceBox({
  serviceOrder: { diagnostics, repairs },
  type,
}) {
  // console.log(diagnostics);
  return (
    <Container>
      {type === 'diagnostics' &&
        diagnostics &&
        diagnostics.map(day => (
          <DayList key={day[0].id}>
            <span>{day[0].created_at.split(' ')[0]}</span>
            {day.map(diag => (
              <li key={diag.id}>
                <small>{diag.title}</small>
                <small>{diag.obs}</small>
                <small>{diag.obs}</small>
              </li>
            ))}
          </DayList>
        ))}
      {type === 'repairs' && repairs && (
        <DayList>
          {repairs.map(repair => (
            <li key={repair.id}>
              <small>{repair.title}</small>
              <small>{repair.obs}</small>
              <small>{repair.obs}</small>
            </li>
          ))}
        </DayList>
      )}
    </Container>
  );
}

// receive the list as props, diagnostics, repairs etc
