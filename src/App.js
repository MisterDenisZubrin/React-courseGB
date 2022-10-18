import './styles/App.scss';
import Message from './components/Message';

function App() {
  const deathScreenText = `
    A problem has been detected and Windows has been shut down to prevent damage to your computer.
    
    DRIVER_IRQL_NOT_LESS_OR_EQUAL \n
    
    If this is the first time you've seen this Stop error screen, restart your computer, If this screen appears again, follow these steps:

    Check to make sure any new hardware or software is properly installed.
    If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.

    If problems continue, disable or remove any newly installed hardware or software. Diasble BIOS memory options such as caching or shadowing.
    If you need to use Safe mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.

    Technical information:

    *** STOP: 0x000000D1 (0x00000000, 0x000000000, 0x00000000, 0xF8BCC2A4).


    ***           gv3.sys - Address F86B5A89 base at F86B5000, DateStamp 3dd911eb

    Beginning dump of physical memory
    Physical memory dump complete.
    Contact your system administrator or technical support group for further assistance.
    
  `;
  return (
    <div className="App container">
      <Message text={deathScreenText}></Message>
    </div>
  );
}

export default App;