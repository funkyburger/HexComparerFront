import { render, screen } from '@testing-library/react';
import DataColumn from 'components/DataColumn'

test('renders learn react link', () => {
    let dataColunm : DataColumn = new DataColumn({});
    //dataColunm.setData();

    render(<DataColumn />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });


