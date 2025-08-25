import { AIG, Circuit, IG, MIG } from '../src/index'

test('should import classes correctly', () => {
    expect(AIG).toBeDefined()
    expect(Circuit).toBeDefined()
    expect(IG).toBeDefined()
    expect(MIG).toBeDefined()
})