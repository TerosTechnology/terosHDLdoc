--! Entity example
-- description
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use ieee.math_real.all;


entity myentity is
    generic (
        gen1 : integer := 0
    );
    port (
        clk   : in std_logic;
        reset : in std_logic
        
    );
end entity;
architecture rtl of myentity is

begin

    

end architecture;