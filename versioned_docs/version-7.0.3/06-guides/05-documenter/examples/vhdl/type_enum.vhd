library ieee;
use ieee.std_logic_1164.all;

package mytypes is
    --! main state machine description
    type main_sm_type is (IDLE, --! IDLE state description
                        PUSHA, --! PUSHA state description
                        PUSHB, --! PUSHB state description
                        FINISH --! FINISH state description
                        ); 
end package;