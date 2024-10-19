library ieee;
use ieee.std_logic_1164.all;

package mytypes is
    --! AXI Stream 32 bits
    type t_axis_32b is record
        tdata : std_logic_vector (31 downto 0); --! tdata description
        tvalid : std_logic; --! tvalid description
        tlast : std_logic; --! tlast description
        tready : std_logic; --! tready description
    end record t_axis_32b;
end package;