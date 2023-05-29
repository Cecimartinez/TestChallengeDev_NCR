import { render} from '@testing-library/react';
import { Nav } from "../../components/Nav/Nav";
describe('Nav', () => {
  it('renders Nav component', () => {
    render(<Nav />);
    expect(<Nav/>);

  });
});