library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use ieee.math_real.all;

entity my_process is
    port (
        clk   : in std_logic;
        reset : in std_logic
    );
end entity my_process;

architecture rtl of my_process is

begin
    myproc: process (clk)
    begin
        
    end process;
    

end architecture;

